import React from 'react';

interface TableProps {
    headers: string[];
    data: Array<Record<string, any>>;
}

export default class TableComponent extends React.Component<TableProps> {
    render() {
        const { headers, data } = this.props;

        return (
            <div className="flex flex-col text-white">
                <div className="max-w-xs md:max-w-xl lg:max-w-full">
                    <div className="inline-block py-2">
                        <div className="overflow-x-auto lg:border lg:border-gray-700 lg:rounded-lg">
                            <table className="min-w-full text-left text-sm font-light">
                                {/* Cabeçalhos da tabela */}
                                <thead className="border-b font-medium text-white dark:border-neutral-500">
                                    <tr>
                                        {headers.map((header, index) => (
                                            <th key={index} className="px-6 py-4">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>

                                {/* Corpo da tabela */}
                                <tbody>
                                    {data.map((row, rowIndex) => (
                                        <tr
                                            key={rowIndex}
                                            className="border-b transition duration-300 ease-in-out hover:bg-gray-600 dark:border-neutral-500"
                                        >
                                            {headers.map((header, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className="whitespace-nowrap px-6 py-4 text-white"
                                                >
                                                    {row[header]}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
