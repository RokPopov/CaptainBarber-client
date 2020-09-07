import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBarbershops } from "../../store/homepage/actions";
import { selectBarbershops } from "../../store/homepage/selectors";

import Container from "react-bootstrap/Container";

import BarbershopCard from "../../components/BarbershopCard";

export default function Homepage() {
  const dispatch = useDispatch();
  const barbershops = useSelector(selectBarbershops);

  useEffect(() => {
    dispatch(fetchBarbershops());
  }, [dispatch]);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <span
        style={{
          textShadow: " #000000",
          fontWeight: "bold",
          fontSize: "10rem",
          border: "1rem solid #000000",
          boxShadow: "2rem 2rem 10rem #000000",
        }}
      >
        CAPTAIN BARBER
      </span>
      <Container>
        {barbershops
          .sort(
            (barbershop1, barbershop2) => barbershop2.rate - barbershop1.rate
          )
          .map((barbershop, i) => {
            return (
              <BarbershopCard
                key={i}
                id={barbershop.id}
                title={barbershop.title}
                description={barbershop.description}
                website={barbershop.website}
                showLink={true}
                email={barbershop.email}
                phoneNum={barbershop.phoneNum}
                haircut={barbershop.haircut}
                haircutPrice={barbershop.haircutPrice}
                beardcut={barbershop.beardcut}
                beardcutPrice={barbershop.beardcutPrice}
                combo={barbershop.combo}
                comboPrice={barbershop.comboPrice}
                rate={barbershop.rate}
                openingHours={barbershop.openingHours}
              />
            );
          })}
      </Container>
    </div>
  );
}
