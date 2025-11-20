const form = document.querySelector("form");

const nameOutput = document.querySelector("#name_output");
const locationOutput = document.querySelector("#location_output");
const aiInteractionOutput = document.querySelector("#ai_interaction_output");
const employmentOutput = document.querySelector("#employment_output");
const aiFearOutput = document.querySelector("#ai_fear_output");
const survivalStrategyOutput = document.querySelector(
  "#survival_strategy_output"
);
const trustOutput = document.querySelector("#trust_output");
const mentalHealthOutput = document.querySelector("#mental_health_output");
const dependenceOutput = document.querySelector("#ai_dependence_output");
const consentOutput = document.querySelector("#consent_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);

  const name = formData.get("name");
  const location = formData.get("location");
  const aiInteraction = formData.get("ai_interaction");
  const employment = formData.get("employment");
  const aiFear = formData.get("ai_fear");
  const survivalStrategy = formData.get("survival_strategy");
  const trust = formData.get("trust");
  const mentalHealth = formData.get("mental_health");
  const dependence = formData.get("ai_dependence");
  const consent = formData.get("consent");

  // 2. Vis værdierne i de rigtige output-felter
  nameOutput.textContent = name || "Anonymous";
  locationOutput.textContent = location;
  aiInteractionOutput.textContent = aiInteraction;
  employmentOutput.textContent = employment;
  aiFearOutput.textContent = aiFear;
  survivalStrategyOutput.textContent = survivalStrategy;
  trustOutput.textContent = trust;
  mentalHealthOutput.textContent = mentalHealth;
  dependenceOutput.textContent = dependence;
  consentOutput.textContent = consent;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
