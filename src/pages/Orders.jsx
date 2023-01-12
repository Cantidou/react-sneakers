import axios from "axios";
import React from "react";
import Card from "../components/Card";
import Info from "../components/info";

//для освобождения mockapi
import ordersDB from "../db/orders.json";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        // const { data } = await axios.get(
        //   "https://639b1552d5141501974a8543.mockapi.io/orders"
        // );
        const data = ordersDB;

        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <div className="search-wrapper">
        <h1>Мои заказы</h1>
      </div>
      <div className="sneakers">
        {Array.from(orders).length > 0 ? (
          (isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))
        ) : (
          <Info
            title={"У вас нет заказов"}
            discription={`Вы нищеброд?  Оформите хотя бы один заказ.`}
            image={"./img/no-orders.png"}
            width={70}
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
