import moment from "moment";
import Image from "next/image";
import Confetti from "react-confetti-boom";

export default function Home() {
  var a = moment([2024, 5, 18]);
  var b = moment(new Date());

  const days = b.diff(a, "days");
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-2">
        <h1 className="font-bold text-9xl">{days}</h1>
        <h2 className="font-bold text-5xl text-red-900">
          days waiting on automation
        </h2>
      </main>
    </>
  );
}
