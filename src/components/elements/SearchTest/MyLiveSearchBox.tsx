import { FC, useCallback, useEffect, useRef, useState } from "react";

interface Product {
    linkUrl: string;
    imageUrl: string;
    cardTitle: string;
    cardContent: string;
}

interface Props {
    results?: Product[];
    renderItem(item: Product): JSX.Element;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onSelect?: (item: Product) => void;
    value?: string;
}

const MyLiveSearch: FC<Props> = ({
    results = [],
    renderItem,
    value,
    onChange,
    onSelect,
}: Props) => {
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const [selectedProductUrl, setSelectedProductUrl] = useState<string | null>(null); // Store selected product URL
    const resultContainer = useRef<HTMLDivElement>(null);
    const [showResults, setShowResults] = useState(false);
    const [defaultValue, setDefaultValue] = useState("");

    const handleSelection = useCallback((selectedIndex: number) => {
        const selectedItem = results[selectedIndex];
        if (!selectedItem) return resetSearchComplete();
        onSelect && onSelect(selectedItem);
        resetSearchComplete();
        if (selectedItem.linkUrl) {
            setSelectedProductUrl(selectedItem.linkUrl); // Store the URL of the selected product
        }
    }, [onSelect, results]);

    const resetSearchComplete = useCallback(() => {
        setFocusedIndex(-1);
        setShowResults(false);
    }, []);

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = useCallback((e) => {
        const { key } = e;
        let nextIndexCount = 0;

        // move down
        if (key === "ArrowDown")
            nextIndexCount = (focusedIndex + 1) % results.length;

        // move up
        if (key === "ArrowUp")
            nextIndexCount = (focusedIndex + results.length - 1) % results.length;

        // hide search results
        if (key === "Escape") {
            resetSearchComplete();
        }

        // select the current item
        if (key === "Enter") {
            e.preventDefault();
            handleSelection(focusedIndex);
        }

        setFocusedIndex(nextIndexCount);
    }, [focusedIndex, handleSelection, resetSearchComplete, results]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        setDefaultValue(e.target.value);
        onChange && onChange(e);
    }, [onChange]);

    useEffect(() => {
        if (selectedProductUrl) {
            window.location.href = selectedProductUrl; // Navigate to selected product URL
        }
    }, [selectedProductUrl]);

    useEffect(() => {
        if (!resultContainer.current) return;

        resultContainer.current.scrollIntoView({
            block: "center",
        });
    }, [focusedIndex]);

    useEffect(() => {
        if (results.length > 0 && !showResults) setShowResults(true);

        if (results.length <= 0) setShowResults(false);
    }, [results]);

    useEffect(() => {
        if (value) setDefaultValue(value);
    }, [value]);

    return (
        <div
            tabIndex={1}
            onBlur={resetSearchComplete}
            onKeyDown={handleKeyDown}
            className="relative"
        >
            <input
                value={defaultValue}
                onChange={handleChange}
                type="text"
                className="flex h-10  rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-black  mr-8 lg:mr-16 w-40 lg:w-60"
                placeholder="Search"
            />

            {/* Search Results Container */}
            {showResults && (
                <div className="absolute mt-1 w-full p-2 bg-purple-900 shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
                    {results.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onMouseDown={() => handleSelection(index)}
                                ref={index === focusedIndex ? resultContainer : null}
                                style={{
                                    backgroundColor:
                                        index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                                }}
                                className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                            >
                                {renderItem(item)}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyLiveSearch;
