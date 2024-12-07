import React from "react";

interface TableProps {
  headers: string[];
  data: Array<Record<string, any>>;
  onRowSelect: (selectedRows: number[]) => void;
  onEdit: (rowIndex: number, rowData: Record<string, any>) => void;
  showEditButton?: boolean; // Nova propriedade para controlar a exibição do botão
}


interface State {
  selectedRows: number[];
  currentPage: number;
}

export default class TableComponent extends React.Component<TableProps, State> {
  state: State = {
    selectedRows: [],
    currentPage: 1,
  };

  itemsPerPage = 10;

  handleCheckboxChange = (index: number) => {
    this.setState((prevState) => {
      const isSelected = prevState.selectedRows.includes(index);
      const selectedRows = isSelected
        ? prevState.selectedRows.filter((row) => row !== index)
        : [...prevState.selectedRows, index];

      this.props.onRowSelect(selectedRows);
      return { selectedRows };
    });
  };

  handlePageChange = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  renderPagination = (totalPages: number) => {
    const { currentPage } = this.state;

    const visiblePages: Array<number | string> = [];
    if (currentPage > 2) visiblePages.push(1, "...");

    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      visiblePages.push(i);
    }

    if (currentPage < totalPages - 1) visiblePages.push("...", totalPages);

    return (
      <div className="flex items-center gap-2 mt-4 justify-center">
        {visiblePages.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${page === currentPage ? "bg-gray-500 text-white" : "bg-gray-300 text-gray-800"
                }`}
              onClick={() => this.handlePageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-2 text-gray-500">
              {page}
            </span>
          )
        )}
      </div>
    );
  };

  render() {
    const { headers, data, onEdit } = this.props;
    const { selectedRows, currentPage } = this.state;

    const totalPages = Math.ceil(data.length / this.itemsPerPage);
    const startIndex = (currentPage - 1) * this.itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + this.itemsPerPage);

    return (
      <div className="flex flex-col text-white">
        <div className="max-w-xs md:max-w-xl lg:max-w-full">
          <div className="inline-block py-2">
            <div className="overflow-x-auto lg:border lg:border-gray-700 lg:rounded-lg">
              <table className="min-w-full text-left text-sm font-light">
                {/* Cabeçalhos da tabela */}
                <thead className="border-b font-medium text-white dark:border-neutral-500">
                  <tr>
                    <th className="px-6 py-4">
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          this.setState({
                            selectedRows: e.target.checked ? currentData.map((_, idx) => idx) : [],
                          })
                        }
                        checked={selectedRows.length === currentData.length && currentData.length > 0}
                      />
                    </th>
                    {headers.map((header, index) => (
                      <th key={index} className="px-6 py-4">
                        {header}
                      </th>
                    ))}
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>

                {/* Corpo da tabela */}
                <tbody>
                  {currentData.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b transition duration-300 ease-in-out hover:bg-gray-600 dark:border-neutral-500"
                    >
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(rowIndex)}
                          onChange={() => this.handleCheckboxChange(rowIndex)}
                        />
                      </td>
                      {headers.map((header, colIndex) => (
                        <td key={colIndex} className="whitespace-nowrap px-6 py-4 text-white">
                          {React.isValidElement(row[header]) ? row[header] : row[header] || "N/A"}
                        </td>
                      ))}
                      <td className="px-6 py-4">
                        {this.props.showEditButton && (
                          <button
                            className="px-2 py-1 bg-yellow-400 text-white rounded-lg hover:bg-yellow-300"
                            onClick={() => onEdit(rowIndex, row)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                        )}
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Paginação */}
          {this.renderPagination(totalPages)}
        </div>
      </div>
    );
  }
}
