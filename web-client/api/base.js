export const API_GATEWAY_URL = "http://localhost:9000";

/**
 * Base fetch unction.
 * @param {string} url
 * @param {RequestInit} init
 */
export const baseFetch = async (url, init) =>
  await fetch(API_GATEWAY_URL + url + "/", init).then(async (res) => {
    try {
      return await res.json();
    } catch (error) {
      return null;
    }
  });
