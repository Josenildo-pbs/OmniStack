import React, { useState, useEffect } from "react";
import "./styles.css";
function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      longitude,
      latitude,
      github_username,
      techs
    });
    setGithubUsername("");
    setTechs("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          type="text"
          name="github_username"
          id="github_username"
          required
          onChange={e => {
            setGithubUsername(e.target.value);
          }}
          value={github_username}
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          type="text"
          name="techs"
          id="techs"
          required
          onChange={e => {
            setTechs(e.target.value);
          }}
          value={techs}
        ></input>
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={e => {
              setLatitude(e.target.value);
            }}
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={e => {
              setLongitude(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
