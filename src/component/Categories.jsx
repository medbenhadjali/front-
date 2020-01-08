import React from 'react';
import '../App.css';

export default function Categories() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <button class="btn btn-outline-success" type="button">
            Immobilier
          </button>
          <button class="btn btn-outline-success" type="button">
            véhicules
          </button>
          <button class="btn btn-outline-success" type="button">
            Informatique et Multimedia
          </button>
          <button class="btn btn-outline-success" type="button">
            Habillement
          </button>
          <button class="btn btn-outline-success" type="button">
            entreprise
          </button>
          <button class="btn btn-outline-success" type="button">
            etablissement
          </button>
        </form>
      </nav>
    </div>
  );
}
