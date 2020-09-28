import React, { useState } from "react";
import Layer from "../../components/layer/Layer";
import "./Layers.css";
import BuildControls from "../../components/buildControls/BuildControls";
import AddLayer from "../../components/addLayer/AddLayer";
import Message from "../../components/message/Message";
import Modal from "../../components/modal/Modal";
import baker from "../../assets/images/baker.png";

const colours = {
  pineapple: {
    color: "#ffdd00",
    light: "#ffea00",
    price: 200,
  },
  chocolate: {
    color: "#a56336",
    light: "#b76935",
    price: 250,
  },
  strawberry: {
    color: "#ff5d8f",
    light: "#ff87ab",
    price: 150,
  },
  redVelvet: {
    color: "#c71f37",
    light: "#e01e37",
    price: 300,
  },
  vanilla: {
    color: "#e1dee9",
    light: "#fefcfb",
    price: 100,
  },
  blueberry: {
    color: "#431259",
    light: "#60308c",
    price: 250,
  },
};
const Layers = (props) => {
  const [layers, setLayers] = useState([]);
  const [input, setInput] = useState({
    base: "strawberry",
    cream: "strawberry",
  });
  const [show, setShow] = useState(false);
  const [messageShow, setMessageShow] = useState(false);
  const [text, setText] = useState("Beautiful!");
  const [editDelete, setEditDelete] = useState(false);
  const [id, setId] = useState("");
  const [edit, setEdit] = useState(false);
  const [baseOptions, setBaseOptions] = useState([
    "Select",
    "strawberry",
    "vanilla",
    "chocolate",
    "pineapple",
    "redVelvet",
    "blueberry",
  ]);
  const [creamOptions, setCreamOptions] = useState([
    "Select",
    "strawberry",
    "vanilla",
    "chocolate",
    "pineapple",
    "redVelvet",
    "blueberry",
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  let width = 200;
  let marginLeft = 100;

  const messages = [
    "This looks like a really good choice!!",
    "Delicious!",
    "You have a really good taste!",
    "Sweet!!",
    "Cakes are God's gift to mankind!",
    "You are a true baker!",
    "This is going to taste so yummy!!",
    "You must be a professional!",
  ];

  const showMessage = () => {
    setMessageShow(true);
    setTimeout(() => {
      setMessageShow(false);
    }, 1500);
  };

  const inputChangeHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const addLayerHandler = () => {
    width = 200;
    marginLeft = 100;
    console.log(input.base);
    console.log(input.cream);
    setLayers([
      ...layers,
      {
        baseFlavour: colours[input.base].color,
        creamFlavour: colours[input.cream].color,
        baseLight: colours[input.base].light,
        id: new Date().getTime(),
        base: input.base,
        cream: input.cream,
      },
    ]);
    setShow(false);
    setText(messages[Math.floor(Math.random() * messages.length)]);
    setTotalPrice(
      totalPrice + (layers.length + 1) * 100 + colours[input.cream].price
    );
    showMessage();
  };

  const handleEditDelete = (id) => {
    setId(id);
    setEditDelete(true);
  };
  const deleteLayer = () => {
    let price = 0;
    let l = 100;
    layers.map((layer) => {
      if (layer.id !== id) {
        price = price + l;
        l = l + 100;
        price = price + colours[layer.cream].price;
      }
    });
    setLayers(layers.filter((layer) => layer.id !== id));
    setEditDelete(false);
    setTotalPrice(price);
  };

  const handleEdit = () => {
    let tempArr = [];
    layers.map((layer) => {
      if (layer.id === id) {
        tempArr = baseOptions.filter((option) => option !== layer.base);
        tempArr.unshift(layer.base);
        setBaseOptions(tempArr);
        tempArr = creamOptions.filter((option) => option !== layer.cream);
        tempArr.unshift(layer.cream);
        setCreamOptions(tempArr);
        setInput({
          ...input,
          base: layer.base,
          cream: layer.cream,
        });
      }
    });
    setEditDelete(false);
    setEdit(true);
    setShow(true);
  };

  const editLayerHandler = () => {
    width = 200;
    marginLeft = 100;
    let tempArr = layers;
    let price = 0;
    let l = 100;
    tempArr.map((layer) => {
      if (layer.id === id) {
        layer.baseFlavour = colours[input.base].color;
        layer.creamFlavour = colours[input.cream].color;
        layer.baseLight = colours[input.base].light;
        layer.base = input.base;
        layer.cream = input.cream;
        price = price + colours[input.cream].price;
      } else price = price + colours[layer.cream].price;
      price = price + l;
      l = l + 100;
    });
    setLayers(tempArr);
    setTotalPrice(price);
    modalClosed();
    setEdit(false);
  };

  const calculatePrice = () => {
    let price = 0;
    layers.map((layer) => {
      price = price + 100;
      price = price + colours[layer.cream].price;
    });
    return price;
  };
  const showModel = () => {
    setShow(true);
  };

  const modalClosed = () => {
    setShow(false);
    setEditDelete(false);
  };
  return (
    <>
      <AddLayer
        show={show}
        addLayerHandler={addLayerHandler}
        editLayerHandler={editLayerHandler}
        modalClosed={modalClosed}
        inputChangeHandler={inputChangeHandler}
        edit={edit}
        baseOptions={baseOptions}
        creamOptions={creamOptions}
        input={input}
      ></AddLayer>
      <Message show={messageShow} text={text}></Message>
      <BuildControls
        showModel={showModel}
        openMenu={props.openMenu}
        price={totalPrice}
      ></BuildControls>
      <Modal show={editDelete} modalClosed={modalClosed}>
        <div>
          <button className="edit-delete1" onClick={handleEdit}>
            EDIT
          </button>
          <button className="edit-delete2" onClick={deleteLayer}>
            DELETE
          </button>
        </div>
      </Modal>
      <div className="cake-all-layers">
        {layers.length === 0 ? (
          <div>
            <img src={baker} alt="baker"></img>
            <h1>Let's start baking!!</h1>
          </div>
        ) : (
          layers.map((layer) => {
            width = width + 100;
            marginLeft = marginLeft - 50;
            return (
              <Layer
                width={width + "px"}
                marginLeft={marginLeft + "px"}
                flavour={layer}
                handleEditDelete={handleEditDelete}
              ></Layer>
            );
          })
        )}
      </div>
    </>
  );
};

export default Layers;
