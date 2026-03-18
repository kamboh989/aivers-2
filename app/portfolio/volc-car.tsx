

export default function VolveCar() {
  return (
    <div className="w-full flex justify-center py-10 bg-black">
      <video
        src="/project/VolvoCar.mp4"
        autoPlay
        loop
        muted
        controls
        className="w-full max-w-5xl rounded-2xl shadow-xl"
      />
    </div>
  );
}
