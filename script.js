const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("header button")

btn.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("❌ Já incluso ❌")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem(
    "didHabits",
    JSON.stringify(nlwSetup.data)
  ) /* Guarda como string en json */
}

//                                        si hay o sino un obj vacio
const data = JSON.parse(localStorage.getItem("didHabits")) || {}
/* Transforma en obj otra vez */

nlwSetup.setData(data)
nlwSetup.load()
