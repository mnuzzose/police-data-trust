import { IncidentRecordType } from "../../../../models"
import styles from "./incident-data.module.css"

const { wrapper, dataBlock, category, data, officerDisplay, officerColumn } = styles

export default function IncidentData(incident: IncidentRecordType) {
  const { description } = incident
  // Need to make grid style, newline for departments
  return (
    <div className={wrapper}>
      <div className={dataBlock}>
        <p className={category}>Summary:</p>
        <p className={data}>{description}</p>
      </div>
      <div className={dataBlock}>
        <p className={category}>Departments Involved:</p>
        <div>
          {incident.officers.map((officer) => (
            <p className={data} key={officer.badgeNo}>
              {officer.department}
            </p>
          ))}
        </div>
      </div>
      <div className={dataBlock}>
        <p className={category}>Officers Involved:</p>
        <div>{officerBox(incident.officers)}</div>
      </div>
    </div>
  )
}

function officerBox(officers: IncidentRecordType["officers"]) {
  return (
    <div className={officerDisplay}>
      <div className={officerColumn}>
        <p className={category}>Officer Name</p>
        {officers.map((officer) => (
          <p className={data} key={officer.badgeNo}>
            {officer.firstName} {officer.lastName}
          </p>
        ))}
      </div>
      <div className={officerColumn}>
        <p className={category}>Badge No.</p>
        {officers.map((officer) => (
          <p className={data} key={officer.badgeNo}>
            {officer.badgeNo}
          </p>
        ))}
      </div>
    </div>
  )
}