import LiquidEther from "@/components/LiquidEther";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div className="containerApresentacao"></div>

          <div style={{ width: "100%", height: 600, position: "relative" }}>
            <LiquidEther
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              mouseForce={10}
              cursorSize={80}
              viscous={80}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.8}
              isBounce={true}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3}
              autoRampDuration={0.6}
            />
          </div>
          <div>asfgsdfsd</div>
          <div>asfgsdfsd</div>
          <div>asfgsdfsd</div>

          <div>asfgsdfsd</div>
        </section>
        <section> </section>
      </main>
    </div>
  );
}
