// TODO: Load Reports from API
export default function ReportsTable() {
    return (
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <table className="w-full text-gray-300">
                <thead className="bg-gray-700">
                <tr>
                    <th className="p-4 text-left">Report ID</th>
                    <th className="p-4 text-left">Title</th>
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={4} className="p-4 text-center text-gray-500">
                        No reports available yet.
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}