export const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        onSearchChange(searchTerm);
    };

    return (
        <input
            type="text"
            placeholder="Search events..."
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-black"
        />
    );
};

type SearchBarProps = {
    onSearchChange: (searchTerm: string) => void;
};
