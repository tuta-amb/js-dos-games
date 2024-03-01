async function persist(again=true) {
  if (!navigator?.storage?.persist || !navigator?.storage?.persisted) {
    alert("Storage persistance API is not supported by your browser, your save data may be cleared.");
    return;
  }
  if (await navigator.storage.persisted()) return;

  alert("Please allow storage persistance to ensure your save data does not get deleted.");
  if (await navigator.storage.persist()) {
    alert("Thank you for enabling storage persistance!");
  } else if (again === true) {
    alert("Storage persistance failed. Retrying...");
    persist(false);
  }
}

export default async function shared() {
  await persist();
}