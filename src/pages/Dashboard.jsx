import React, { useEffect, useState } from "react";
import {
  Activity,
  BatteryCharging,
  Car,
  CircleStop,
  Gauge,
  Play,
  Power,
  Sun,
  Zap,
} from "lucide-react";

export default function Dashboard() {
  const [charging, setCharging] = useState(false);
  const [battery, setBattery] = useState(42);
  const [solar, setSolar] = useState(2.4);
  const [session, setSession] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSolar(Number((1.8 + Math.random() * 1.5).toFixed(1)));

      if (charging) {
        setBattery((value) => Math.min(100, value + 1));
        setSession((value) => value + 1);
      }
    }, 1500);

    return () => clearInterval(timer);
  }, [charging]);

  return (
    <section className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow dark">
            <span className="live-dot" />
            SOLVRA APP
          </span>

          <h1>
            Charging
            <br />
            <span>dashboard.</span>
          </h1>

          <p>
            Interactive concept simulator for solar generation, energy storage
            and wireless EV charging.
          </p>
        </div>

        <div className={`system-status ${charging ? "charging" : ""}`}>
          <span />
          {charging ? "CHARGING" : "STANDBY"}
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-main-card">
          <div className="dash-card-top">
            <div>
              <small>VEHICLE BATTERY</small>
              <h2>{battery}%</h2>
            </div>

            <div className="big-battery-icon">
              <BatteryCharging size={35} />
            </div>
          </div>

          <div className="battery-large">
            <div
              className="battery-level"
              style={{ width: `${battery}%` }}
            />
          </div>

          <div className="charge-message">
            <div>
              <Car size={19} />
              <span>
                {charging
                  ? "Vehicle is receiving simulated wireless power."
                  : "Vehicle is parked and ready."}
              </span>
            </div>
          </div>

          <button
            className={`charge-button ${charging ? "stop" : ""}`}
            onClick={() => setCharging(!charging)}
            disabled={battery >= 100}
          >
            {charging ? (
              <>
                <CircleStop size={20} />
                Stop charging
              </>
            ) : (
              <>
                <Play size={20} fill="currentColor" />
                Start charging
              </>
            )}
          </button>
        </div>

        <div className="dashboard-side">
          <DashMetric
            icon={<Sun />}
            title="Solar input"
            value={`${solar} kW`}
            detail="Simulated"
          />

          <DashMetric
            icon={<BatteryCharging />}
            title="Energy storage"
            value="76%"
            detail="Available"
          />

          <DashMetric
            icon={<Gauge />}
            title="Charge mode"
            value="Wireless"
            detail="Concept"
          />

          <DashMetric
            icon={<Activity />}
            title="Session"
            value={`${session}s`}
            detail="Simulation"
          />
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="energy-monitor">
          <div className="monitor-heading">
            <div>
              <small>ENERGY MONITOR</small>
              <h3>Live system flow</h3>
            </div>

            <Zap size={22} fill="currentColor" />
          </div>

          <div className="monitor-flow">
            <MonitorNode icon={<Sun />} title="Solar" value={`${solar} kW`} />
            <div className="monitor-arrow">→</div>
            <MonitorNode icon={<BatteryCharging />} title="Storage" value="76%" />
            <div className="monitor-arrow">→</div>
            <MonitorNode icon={<Zap />} title="Wireless" value={charging ? "ON" : "READY"} />
            <div className="monitor-arrow">→</div>
            <MonitorNode icon={<Car />} title="EV" value={`${battery}%`} />
          </div>
        </div>

        <div className="dashboard-note">
          <Power size={20} />
          <div>
            <strong>Simulation only</strong>
            <p>
              Values on this dashboard are illustrative and do not represent
              measurements from a physical charging system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashMetric({ icon, title, value, detail }) {
  return (
    <div className="dash-metric">
      <div className="metric-icon">{icon}</div>

      <div>
        <small>{title}</small>
        <strong>{value}</strong>
        <span>{detail}</span>
      </div>
    </div>
  );
}

function MonitorNode({ icon, title, value }) {
  return (
    <div className="monitor-node">
      <div>{icon}</div>
      <small>{title}</small>
      <strong>{value}</strong>
    </div>
  );
}