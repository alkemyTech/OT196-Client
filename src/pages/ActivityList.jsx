import React from "react";
import { hardcodeActivities } from "../components/activities/harcodeActivities";
import "./ActivityList.css";
import ActivityCard from "../components/activities/ActivityCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import customTransition from "../components/utils/CustomTransition";

export default function ActivityList() {
  const activitiesToShow = hardcodeActivities;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={customTransition}
    >
      <Breadcrumb className="mt-3 ms-3">
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/backoffice" }}>
          Backoffice
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Actividades</Breadcrumb.Item>
      </Breadcrumb>
      <div className=".d-sm-flex justify-content-around  container_main">
        {activitiesToShow && activitiesToShow.length ? (
          activitiesToShow.map((x) => {
            return (
              <ActivityCard
                key={x.id}
                id={x.id}
                imagen={x.imagen}
                tittle={x.tittle}
                start={x.startDate}
                end={x.finishDate}
                participants={x.participants}
                className="card_main"
              />
            );
          })
        ) : (
          <h1 className="container_no_activities_to_show">
            {" "}
            No tenemos actividades programadas proximante, en cuanto las
            tengamos podras verlas aquí{" "}
          </h1>
        )}
      </div>
    </motion.div>
  );
}
