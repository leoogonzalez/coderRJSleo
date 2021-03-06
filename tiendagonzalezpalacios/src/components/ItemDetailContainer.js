import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { toast } from 'react-toastify'
 



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${idProducto}`)
      .then((response) => {
        return response.json();
      })
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch(() => {
        // toast.error("error al cargar el producto")
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading) {
    return <h1>Cargando...</h1>;
  } else {
    return <ItemDetail item={item} />;
  }
};

export default ItemDetailContainer;