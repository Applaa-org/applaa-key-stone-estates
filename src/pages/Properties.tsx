import { useState } from 'react';
import { properties, Property } from '@/data/properties';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Square, MapPin, PoundSterling } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'sale' | 'rent'>('all');
  const [priceRange, setPriceRange] = useState<'all' | 'low' | 'mid' | 'high'>('all');

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || property.type === typeFilter;
    
    let matchesPrice = true;
    if (priceRange !== 'all') {
      if (priceRange === 'low' && property.price > 500000) matchesPrice = false;
      if (priceRange === 'mid' && (property.price < 500000 || property.price > 1000000)) matchesPrice = false;
      if (priceRange === 'high' && property.price < 1000000) matchesPrice = false;
    }
    
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Property Listings</h1>
        <p className="text-gray-600">Discover your perfect home from our curated selection</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Search Properties</label>
            <Input
              type="text"
              placeholder="Search by location or property name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Property Type</label>
            <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sale">For Sale</SelectItem>
                <SelectItem value="rent">To Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <Select value={priceRange} onValueChange={(value) => setPriceRange(value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under £500k</SelectItem>
                <SelectItem value="mid">£500k - £1M</SelectItem>
                <SelectItem value="high">Over £1M</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 left-2 bg-amber-400 text-primary">
                {property.type === 'sale' ? 'For Sale' : 'To Rent'}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-primary">{property.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {property.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <PoundSterling className="h-5 w-5 text-amber-600" />
                <span className="text-2xl font-bold text-amber-600">
                  {property.type === 'sale' 
                    ? `£${property.price.toLocaleString()}`
                    : `£${property.price.toLocaleString()} pcm`
                  }
                </span>
              </div>
              <p className="text-gray-600 mb-4">{property.shortDescription}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Bed className="h-4 w-4" />
                  {property.bedrooms} beds
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  {property.bathrooms} baths
                </div>
                <div className="flex items-center gap-1">
                  <Square className="h-4 w-4" />
                  {property.area.toLocaleString()} sqft
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to={`/properties/${property.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          <p className="text-gray-400">Try adjusting your search filters.</p>
        </div>
      )}
    </div>
  );
};

export default Properties;