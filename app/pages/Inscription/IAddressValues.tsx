import {AddressValues} from '../../services/address/addressActions.ts';

export function getAllEntry(addressValues: AddressValues[]) {
  let entries: Set<string> = new Set();
  addressValues.forEach(value => {
    entries.add(String(value.entry));
  });
  return Array.from(entries).map(value => ({label: value, value: value}));
}

export function getFloorForEntries(
  addressValues: AddressValues[],
  selectedEntry: string | undefined,
) {
  let floors: Set<string> = new Set();
  addressValues.forEach(value => {
    if (selectedEntry && String(value.entry) === selectedEntry) {
      value.floor === 0 ? floors.add('RdC') : floors.add(String(value.floor));
    }
  });
  return Array.from(floors).map(value => ({label: value, value: value}));
}

export function getApartmentsForFloor(
  addressValues: AddressValues[],
  selectedFloor: string,
) {
  if (selectedFloor === 'RdC') {
    selectedFloor = '0';
  }
  let apartments: Set<string> = new Set();
  addressValues.forEach(value => {
    if (selectedFloor && String(value.floor) === selectedFloor) {
      apartments.add(String(value.apartment));
    }
  });
  return Array.from(apartments).map(value => ({label: value, value: value}));
}

export function getAddressId(
  addressValues: AddressValues[],
  selectedEntry: string,
  selectedFloor: string,
  selectedApartment: string,
) {
  if (selectedFloor === 'RdC') {
    selectedFloor = '0';
  }

  const filteredAddress = addressValues.find(address => {
    return (
      address.entry === Number(selectedEntry) &&
      address.floor === Number(selectedFloor) &&
      address.apartment === Number(selectedApartment)
    );
  });

  if (filteredAddress) {
    return filteredAddress.id;
  } else {
    console.error('No matching address found');
    return null;
  }
}
