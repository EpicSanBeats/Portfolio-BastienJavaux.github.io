import { a0001, a0002 } from "../js/main.js";

var t = new Date().getHours();
if (t < 10) {
  a0001
    .bindPopup(
      `<b>A0001</b><br><p>Le canal (Le matin)</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
    )
    .openPopup();

  a0002
    .bindPopup(
      `<b>A0001</b><br><p>Le canal (Le matin)</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
    )
    .openPopup();
} else if (t < 20) {
  a0001
    .bindPopup(
      `<b>A0001</b><br><p>Le canal (Le midi)</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
    )
    .openPopup();
  a0002
    .bindPopup(
      `<b>A0001</b><br><p>Le canal (Le midi)</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
    )
    .openPopup();
} else {
  a0001
    .bindPopup(
      `<b>A0001</b><br><p>Le canal (Le soir)</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
    )
    .openPopup();
  a0002
    .bindPopup(
      `<b>A0001</b><br><p>Le canal (Le soir)</p> <audio src="https://ipfs.io/ipfs/bafybeiankwaoxdld2c5a4yxmhhqr3qcduim4oyo2burukkvfn5eif2qwbu?filename=30%3A06%3A2022-7H45.3.wav" controls >`
    )
    .openPopup();
}