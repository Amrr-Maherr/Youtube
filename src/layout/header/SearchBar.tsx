import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Mic, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FetchSearchSuggestions } from "@/queries/Search";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { data: suggestions } = FetchSearchSuggestions(query);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFocused || !suggestions?.length) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % suggestions.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        handleSuggestionClick(suggestions[selectedIndex]);
      } else if (e.key === "Escape") {
        setIsFocused(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isFocused, suggestions, selectedIndex]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsFocused(false);
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
  };

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(query)}`);
      setIsFocused(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const showDropdown = isFocused && suggestions && suggestions.length > 0;

  return (
    <div ref={searchRef} className={cn("relative flex flex-1 items-center max-w-2xl", className)}>
      <div className="flex w-full items-center">
        <div
          className={cn(
            "flex flex-1 items-center bg-[#121212] border rounded-l-full px-4 py-2 focus-within:border-blue-500 transition-colors",
            isFocused ? "border-blue-500" : "border-gray-700"
          )}
        >
          <Search className="h-4 w-4 text-gray-400 mr-2 shrink-0" />
          <Input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(-1);
            }}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:border-none h-auto p-0"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setSelectedIndex(-1);
              }}
              className="ml-2 p-1 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-gray-800 hover:bg-gray-700 rounded-l-none rounded-r-full px-5 border border-l-0 border-gray-700"
        >
          <Search className="h-4 w-4 text-white" />
        </Button>
      </div>
      <Button
        variant="secondary"
        size="icon"
        className="ml-2 rounded-full bg-gray-800 hover:bg-gray-700 shrink-0"
      >
        <Mic className="h-4 w-4 text-white" />
      </Button>

      {/* Search Suggestions Dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#1f1f1f] border border-gray-700 rounded-xl overflow-hidden shadow-xl z-50">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-700 transition-colors",
                index === selectedIndex && "bg-gray-700"
              )}
            >
              <Search className="h-4 w-4 text-gray-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white truncate">{suggestion}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
