import axios from "axios";
import React from "react";
import Card from "../components/Card";

function Orders() {
  const [ orders, setOrders ] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async() => {
      try {
        const { data } = await axios.get('https://639b1552d5141501974a8543.mockapi.io/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, [])

  return (
        <div>
              <div className="search-wrapper">
                <h1>Мои заказы</h1>
              </div>
              <div className="sneakers">
                {
                 (isLoading ? [...Array(8)] : orders).map((item, index) => (
                      <Card key={index} loading={isLoading} {...item}/>
                  ))
                }
              </div>
            </div>
    )
}

export default Orders;