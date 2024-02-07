function FoodPreferences() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="col-span-full">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Food Preferences
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Enough with the boring parts, here comes the tasty part
        </p>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="location-preffered"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Location Preferred*
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="location-preffered"
            id="location-preffered"
            placeholder="NYC"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="food-category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Food Category*
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="food-category"
            id="food-category"
            placeholder="Bubble Tea"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <span className="block text-xs font-medium leading-6 text-gray-900">
          View a list of all categories{' '}
          <a
            href="https://blog.yelp.com/businesses/yelp_category_list/"
            target="_blank"
            className="text-indigo-600 hover:underline"
          >
            here
          </a>
        </span>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="attributes"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Restaurant Attributes
        </label>
        <span className="block text-xs font-medium leading-6 text-gray-900">
          What qualities of a restaurant are important to you?
        </span>
        <div className="mt-2">
          <select
            id="attributes"
            name="attributes"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            multiple
            required
          >
            <option value="reservation">Reservation</option>
            <option value="deals">Deals</option>
            <option value="wheelchair_accessible">Wheelchair Accessible</option>
            <option value="parking_lot">Parking Lot</option>
            <option value="outdoor_seating">Outdoor Seating</option>
            <option value="wifi_free">Free Wifi</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="price-point"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Price Point
        </label>
        <div className="mt-2">
          <select
            id="price-point"
            name="price-point"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            multiple
          >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FoodPreferences;