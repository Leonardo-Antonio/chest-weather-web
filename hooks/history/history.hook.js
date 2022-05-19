import { historyService } from "../../services/history/history.service";
import { useState } from "react";

export const useHistorySave = () => {
  const [loadingSaveHistory, setLoadingSaveHistory] = useState(false);
  const [loadingPlaceSearhOld, setLoadingPlaceSearhOld] = useState(false);
  const [places, setPlaces] = useState([]);

  const handlerSaveHistory = async (info) => {
    setLoadingSaveHistory(true);
    await historyService.saveHistory(info);
    setLoadingSaveHistory(false);
  };

  const handlerGetById = async () => {
    setLoadingPlaceSearhOld(true);
    const { data, isErr } = await historyService.getById();
    if (!isErr) {
      setPlaces(data);
    }
    setLoadingPlaceSearhOld(false);
  };

  return {
    loadingSaveHistory,
    handlerSaveHistory,
    handlerGetById,
    loadingPlaceSearhOld,
    places,
  };
};
