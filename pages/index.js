import { WeatherForm } from "../components/Form/Weather";
import { RouteGuard } from "../components/RouteGuard/guard";

export default function Home() {
  return (
    <RouteGuard>
      <div>
        <main>
          <section>
            <WeatherForm />
          </section>
        </main>
      </div>
    </RouteGuard>
  );
}
