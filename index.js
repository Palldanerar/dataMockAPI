class DataMockAPI {
  constructor(url) {
    this.url = url;
  }

  getData() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => console.log(data));
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
