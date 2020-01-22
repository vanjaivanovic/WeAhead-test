import './App.css';
import React, { useState } from 'react';

const App = () => {
    const [values, setValues] = useState({project: '', activity: '', from: '', to: '', note: ''})
    const [timeReports, setTimeReports] = useState( [
      {
        id: 0,
        project: 'Lorem ipsum',
        activity: 'Fusce',
        from: '9.00',
        to: '17.00',
        note: 'Proin vel iaculis diam'
      }
    ] );

    const handleInputChange = e => {
      const {name, value} = e.target
      setValues({...values, [name]: value})
  }

  const addTimeReport = event => {
    event.preventDefault()
    setTimeReports([...timeReports, {
      id: timeReports.length,
      project: values.project,
      activity: values.activity,
      from: values.from,
      to: values.to,
      note: values.note
    }])
    event.target.reset()
  }

  const deleteTimeReport = (id) => {
    if (window.confirm("Är du säker på att du vill ta bort denna tidrapport?")) {
    let filteredArray = timeReports.filter(timeReport => timeReport.id !== id);
    setTimeReports(filteredArray)
  }}
 
  return (
    <div className="App">
     <h1>Tidrapportering</h1>
    <p>
      Mauris sit tincidunt, lectus cursus, integer adipiscing tempor, montes in
      rhoncus odio auctor urna sit arcu sagittis? A, scelerisque porttitor
      mauris urna montes vut, magnis dolor. Et aliquet?
    </p>
    <p>
      Et elementum, nunc parturient aliquam pulvinar elit vel ridiculus et
      cursus nec? Porta diam, ut. Augue, turpis mus, nunc sit ac, nascetur
      elementum habitasse risus etiam, in! Hac ut? Magnis, penatibus enim odio
      enim hac!
    </p>
    <form onSubmit={addTimeReport} class="report">
      <div class="col-left">
        <label>
          Projekt
          <select name="project" onChange={handleInputChange}>
            <option value="">Var god välj ett projekt...</option>
            <option value="project1">Projekt 1</option>
            <option value="project2">Projekt 2</option>
            <option value="project3">Projekt 3</option>
          </select>
        </label>
        <label>
          Aktivitet
          <select name="activity" onChange={handleInputChange}>
            <option value="">Var god välj en aktivitet...</option>
            <option value="activity1">Aktivitet 1</option>
            <option value="activity2">Aktivitet 2</option>
            <option value="activity3">Aktivitet 3</option>
          </select>
        </label>
        <div class="pair">
          <label class="pair-left">
            Från
            <input type="text" name="from" onChange={handleInputChange} />
          </label>
          <label class="pair-right">
            Till
            <input type="text" name="to" onChange={handleInputChange} />
          </label>
        </div>
        <label class="checkbox">
          <span>Debiterbar</span>
          <input type="checkbox" name="billable" />
        </label>
      </div>
      <div class="col-right">
        <label>
          Anteckning
          <textarea name="note" cols="30" rows="10" onChange={handleInputChange}></textarea>
        </label>
        <button type="submit">Spara</button>
      </div>
    </form>
    <table>
      <caption>
        Rapporterad tid
      </caption>
      <thead>
        <tr>
          <th>Projekt</th>
          <th>Aktivitet</th>
          <th>Från</th>
          <th>Till</th>
          <th>Anteckning</th>
          <th colspan="2">Åtgärd</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colspan="7">Summa total tid: 8:00</td>
        </tr>
      </tfoot>
      <tbody>
        {timeReports.map(timeReport => {
          return [
            <tr>
              <td>{timeReport.project}</td>
              <td>{timeReport.activity}</td>
              <td>{timeReport.from}</td>
              <td>{timeReport.to}</td>
              <td>{timeReport.note}</td>
              <td><button>Redigera</button></td>
              <td><button onClick={() => deleteTimeReport(timeReport.id)}>Radera</button></td>
            </tr>
            ]
        })}
      </tbody>
    </table>
    </div>
  );
}

export default App;
