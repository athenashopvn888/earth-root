/**
 * ERC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "ERC01",
  "fullName": "Earthroot Cannabis Dispensary Weed Delivery",
  "street": "5120 Dundas St W",
  "city": "Etobicoke",
  "region": "ON",
  "postal": "M9A 1C2",
  "phoneDisplay": "(437) 523-4850",
  "phoneTel": "tel:+14375234850",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ144lkA43K4gR1atrtFdvu-g",
  "placeId": "ChIJ144lkA43K4gR1atrtFdvu-g",
  "neighbourhood": "Etobicoke Centre (Dundas St W, Kipling / Islington)",
  "intersection": "",
  "transit": "Kipling Station and Islington Station (Line 2) are the subway anchors; finish on Dundas Street West to reach 5120.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
