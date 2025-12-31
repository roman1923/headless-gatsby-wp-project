import React from "react"
import Input from "./Input"
import Select from "./Select"
import Button from "./Button"
import Card from "./Card"

const DeveloperFilters = ({ 
  filterSkill, 
  setFilterSkill, 
  filterLocation, 
  setFilterLocation,
  filterRating,
  setFilterRating,
  onClearFilters
}) => {
  const ratingOptions = [
    { value: "", label: "Any Rating" },
    { value: "9", label: "9+ Stars" },
    { value: "8", label: "8+ Stars" },
    { value: "7", label: "7+ Stars" },
    { value: "6", label: "6+ Stars" },
    { value: "5", label: "5+ Stars" },
    { value: "4", label: "4+ Stars" },
    { value: "3", label: "3+ Stars" },
    { value: "2", label: "2+ Stars" },
    { value: "1", label: "1+ Stars" }
  ]

  return (
    <Card className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <Input
            label="Skill / Technology"
            id="skill-filter"
            type="text"
            placeholder="e.g., backend, frontend, PHP, React..."
            value={filterSkill}
            onChange={(e) => setFilterSkill(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">
            Try: &quot;backend&quot;, &quot;frontend&quot;, &quot;PHP&quot;, &quot;React&quot;, &quot;WordPress&quot;
          </p>
        </div>

        <div>
          <Input
            label="Location"
            id="location-filter"
            type="text"
            placeholder="Enter location..."
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
          />
        </div>

        <div>
          <Select
            label="Minimum Rating"
            id="rating-filter"
            value={filterRating}
            onChange={(e) => setFilterRating(e.target.value)}
            options={ratingOptions}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => {}}
        >
          <svg className="icon-sm mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
          </svg>
          Apply Filters
        </Button>
        <Button 
          variant="secondary" 
          size="sm"
          onClick={onClearFilters}
        >
          <svg className="icon-sm mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Clear All
        </Button>
      </div>
    </Card>
  )
}

export default DeveloperFilters