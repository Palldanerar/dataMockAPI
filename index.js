class DataMockAPI {
  constructor(url) {
    this.url = url;
  }

  getData() {
    return fetch(this.url).then((res) => res.json());
  }

  setData(newData) {
    fetch(this.url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    });
  }

  putData(id, newData) {
    fetch(`${this.url}/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    });
  }

  deleteData(id) {
    fetch(`${this.url}/${id}`, {
      method: "DELETE",
    });
  }
}

export default DataMockAPI;
