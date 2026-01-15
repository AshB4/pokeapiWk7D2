/** @format */

const SUPABASE_URL =
	"https://pjevvqoxxqhkbsiuaasl.supabase.co/rest/v1/poke_table";

const SUPABASE_KEY = "sb_publishable_7-DeT1YRphtU8mVTSpq-Jw_bZ1Jpm1B";

const btn = document.getElementById("fetch-btn");
const container = document.getElementById("pokemon-container");

btn.addEventListener("click", fetchPokemon);

async function fetchPokemon() {
	btn.textContent = "😊 Pokémon Loaded";

	const res = await fetch(SUPABASE_URL, {
		headers: {
			apikey: SUPABASE_KEY,
			Authorization: `Bearer ${SUPABASE_KEY}`,
		},
	});

	const data = await res.json();
	console.log("SUPABASE RESPONSE:", data);

	if (!Array.isArray(data)) {
		alert("Not authorized to access the Pokémon data.");
		return;
	}

	container.innerHTML = "";

	data.forEach((pokemon) => {
		const card = document.createElement("div");
		card.className = "col-md-4";

		card.innerHTML = `
      <div class="card h-100 text-center">
        <img src="${pokemon.image_url}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title text-capitalize">
            ${pokemon.name}
          </h5>
        </div>
      </div>
    `;

		container.appendChild(card);
	});
}
