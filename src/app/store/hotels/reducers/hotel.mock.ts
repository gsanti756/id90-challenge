export const HotelsStoreMock = {
  hotels: {
    hotels: {
      hotels: [
        {
          id: "027700005789",
          name: "Pensión Cibeles [PLNBKG]",
          location: {
            city: "Cordoba",
            country: "ES",
            state: null,
            region: null,
            latitude: 37.879294,
            longitude: -4.77671,
            description: "Cara, 12, Cordoba, ES."
          },
          subtotal: null,
          checkin: "2020-01-21",
          checkout: "2020-01-28",
          promotions: null,
          feature: {
            ranking_score: 0.42775510204081635,
            revenue_score: 0
          },
          amenities: [8],
          nights: 7,
          position: 0,
          id90: "800000416",
          displayable_id: "nrqqnnnnwqpjgnnpnnnnnsyl",
          star_rating: 0,
          review_rating: 7.7,
          display_rate: 28.92,
          display_rate_with_promo: null,
          total: 222.74,
          image:
            "//mobileimg.priceline.com/htlimg/15198/15198004/thumbnail-300.jpg",
          description: null,
          location_description: "Cara, 12, Cordoba, ES.",
          discount_promotion: null,
          accommodation_type: {
            id: 10,
            type: "apartment"
          },
          neighborhood_ids: [9158, 6052723],
          retail_rate: 28.92,
          savings_amount: 0,
          other_sites_prices: null,
          distance: 0.6307073926693114,
          distance_to_airport: null,
          distance_to_airports: null,
          number_of_rooms: 1,
          total_discount_amount: null,
          surcharges: null,
          taxes_and_fees: null,
          payment_date: "checkIn",
          token_store: null,
          supplier_special_rate_type: null,
          experiment_variation: null
        }
      ],
      meta: {
        trip_reason: null,
        auto_dates: null,
        page: 1,
        start_date: "2020-01-21",
        end_date: "2020-01-28",
        test_groups: null,
        experiment_variation: null,
        request_info: {
          keyword: null,
          filters: null,
          sort_criteria: "Overall",
          sort_by: "INDEX",
          sort_order: "desc",
          sort_value: null,
          accommodation_types_filter: null,
          stars_filter: null,
          neighborhood_filter: null
        },
        total_pages: 2
      }
    },

    getHotels: {
      loading: false,
      error: ""
    },

    getNextPage: {
      loading: false,
      error: ""
    }
  }
};
