// import React from 'react'
import React, { useState } from "react";
import Categories from './Categories'
import Navbar from "./Navbar";
import { connect } from "react-redux";
import {
  getAllItemsFromCategorie,
  getOneItem,
  getAllItemsFromOneUser
} from "../actions/action";

function Home() {
  return (
    <div>
      <Navbar />
      <Categories/>
    </div>
  );
}
const mapStateToProps = state => ({ product: state.product });

const mapDispatchToProps = dispatch => ({
  trie: payload => dispatch(getAllItemsFromCategorie(payload)),
  userarticle: payload => dispatch(getAllItemsFromOneUser(payload)),
  article: payload => dispatch(getOneItem(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
