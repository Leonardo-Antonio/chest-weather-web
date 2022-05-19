import { RouteGuard } from "../components/RouteGuard/guard";
import { useHistorySave } from "../hooks/history/history.hook";
import { useEffect } from "react";
import { HistoryCard } from "../components/Card/HistoryCard";

export default function MyHistoryPage() {
  const { loadingPlaceSearhOld, handlerGetById, places } = useHistorySave();

  const getById = async () => {
    await handlerGetById();
  };

  useEffect(() => {
    getById();
  }, [places]);

  return (
    <RouteGuard>
      <div>
        <div>
          <div className="flex justify-center">
            <h1 className="text-5xl p-4">My searches</h1>
          </div>
        </div>

        <section>
          <div>
            <div>{!loadingPlaceSearhOld && "loading.."}</div>
            <div className="flex justify-center flex-wrap">
              {places.map((place, index) => {
                return <HistoryCard key={index} history={place} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </RouteGuard>
  );
}
