import { a0001, a0002 } from "../js/main.js";

var t = new Date().getHours();
if (t < 10) {
  a0001
    .bindPopup(
      `<b>A0001</b><br><p>Le canal. (Le matin)</p><a class="weatherwidget-io" href="https://forecast7.com/fr/50d854d35/brussels/" data-label_1="BRUXELLES" data-label_2="WEATHER" data-theme="original" >BRUXELLES WEATHER</a> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls ></audio>`
    )
    .openPopup();

  a0002
    .bindPopup(
      `<b>A0002</b><br>Devant MolenGeek.(Le matin)<br><a class="weatherwidget-io" href="https://forecast7.com/en/50d854d33/sint-jans-molenbeek/" data-label_1="MOLENBEEK-SAINT-JEAN" data-label_2="WEATHER" data-theme="original" >MOLENBEEK-SAINT-JEAN WEATHER</a> <audio src="https://ipfs.io/ipfs/bafybeiczts35l7rltvsfffsudiotdzafoat4ph765xk2fuejee2y7m4xqy?filename=30%3A06%3A2022-8H20.wav" controls ></audio>`
    )
    .openPopup();
} else if (t < 20) {
  a0001
    .bindPopup(
      `<b>A0001</b><br><p>Le canal. (Le midi)</p> <a class="weatherwidget-io" href="https://forecast7.com/fr/50d854d35/brussels/" data-label_1="BRUXELLES" data-label_2="WEATHER" data-theme="original" >BRUXELLES WEATHER</a><audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls ></audio>`
    )
    .openPopup();
  a0002
    .bindPopup(
      `<b>A0002</b><br>Devant MolenGeek. (Le midi)<br><a class="weatherwidget-io" href="https://forecast7.com/en/50d854d33/sint-jans-molenbeek/" data-label_1="MOLENBEEK-SAINT-JEAN" data-label_2="WEATHER" data-theme="original" >MOLENBEEK-SAINT-JEAN WEATHER</a> <audio src="https://ipfs.io/ipfs/bafybeiczts35l7rltvsfffsudiotdzafoat4ph765xk2fuejee2y7m4xqy?filename=30%3A06%3A2022-8H20.wav" controls ></audio>`
    )
    .openPopup();
} else {
  a0001
    .bindPopup(
      `<b>A0001</b><br><p>Le canal. (Le soir)</p><a class="weatherwidget-io" href="https://forecast7.com/fr/50d854d35/brussels/" data-label_1="BRUXELLES" data-label_2="WEATHER" data-theme="original" >BRUXELLES WEATHER</a> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls ></audio>`
    )
    .openPopup();
  a0002
    .bindPopup(
      `<b>A0002</b><br>Devant MolenGeek. (Le soir)<br><a class="weatherwidget-io" href="https://forecast7.com/en/50d854d33/sint-jans-molenbeek/" data-label_1="MOLENBEEK-SAINT-JEAN" data-label_2="WEATHER" data-theme="original" >MOLENBEEK-SAINT-JEAN WEATHER</a> <audio src="https://ipfs.io/ipfs/bafybeiczts35l7rltvsfffsudiotdzafoat4ph765xk2fuejee2y7m4xqy?filename=30%3A06%3A2022-8H20.wav" controls ></audio>`
    )
    .openPopup();
}
