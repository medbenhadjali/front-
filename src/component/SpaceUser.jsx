// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { addNewItem } from '../actions/action';
import { connect } from 'react-redux';

function SpaceUser({ submit }) {
  let add = {};
  const [modal, setModal] = useState(false);
  const [namep, setNamep] = useState('');
  const [img, setImg] = useState('');
  const [date, setDate] = useState('');
  const [categorie, setCategorie] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);

  function ViewImage(file) {
    function getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    }
    var file = document.querySelector('input[type="file"]').files[0];
    getBase64(file).then((data) => '#ImageBase46'.val(data));
  }

  // console.log(namep, img, date, categorie, desc);
  const handelname = (e) => {
    setNamep(e.target.value);
  };

  const handelimg = (e) => {
    setImg(e.target.value);
  };

  const handeldate = (e) => {
    setDate(e.target.value);
  };

  const handelcategorie = (e) => {
    setCategorie(e.target.value);
  };

  const handeldesc = (e) => {
    setDesc(e.target.value);
  };

  const handelPrice = (e) => {
    setPrice(e.target.value);
  };

  const [imgp, setImgp] = useState('');
  const handelImg = (e) => {
    setImgp(ViewImage(e.target.value));
  };

  const toggle = () => setModal(!modal);

  const onSubmit = () => {
    const data = {
      namep,
      img,
      date,
      desc,
      categorie,
      price,
    };
    submit(data);
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={'/'}>
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Button color="danger" onClick={toggle}>
          ADD NEW PRODUCT
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>ADD NEW PRODUCT</ModalHeader>
          <ModalBody></ModalBody>
          <form action="/action_page.php">
            <div class="form-group">
              <label for="NameProduct"> Name Product</label>
              <input
                type="text"
                class="form-control"
                id="NameProduct"
                placeholder="Name Product"
                name=""
                onChange={handelname}
                value={namep}
              />
            </div>
            <div class="form-group">
              <label for="img">img</label>
              <input
                type="file"
                class="form-control"
                id="img"
                placeholder="Enter image svp  "
                name="img"
                onChange={handelImg}
                value={imgp}
              />
            </div>
            <div class="form-group">
              <label for="Dateproduct">Date Product</label>
              <input
                type="date"
                class="form-control"
                id="Dateproduct"
                placeholder="Dateproduct  "
                name="Dateproduct"
                onChange={handeldate}
                value={date}
              />
            </div>
            <div class="form-group">
              <label for="CategorieProduct">Categorie Product</label>
              <input
                type="text"
                class="form-control"
                id="CategorieProduct"
                placeholder="CategorieProduct  "
                name="CategorieProduct"
                onChange={handelcategorie}
                value={categorie}
              />
            </div>
            <div class="form-group">
              <label for="DescProduct">Desc Product</label>
              <input
                type="text"
                class="form-control"
                id="DescProduct"
                placeholder="DescProduct  "
                name="DescProduct"
                onChange={handeldesc}
                value={desc}
              />
            </div>
            <div class="form-group">
              <label for="PrixProduct">Price Product</label>
              <input
                type="number"
                class="form-control"
                id="PrixProduct"
                placeholder="DescProduct  "
                name="PrixProduct"
                onChange={handelPrice}
                value={price}
              />
            </div>
          </form>
          <ModalFooter>
            <Button onClick={onSubmit} color="primary">
              ADD
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  submit: (payload) => dispatch(addNewItem(payload)),
});
export default connect(null, mapDispatchToProps)(SpaceUser);
