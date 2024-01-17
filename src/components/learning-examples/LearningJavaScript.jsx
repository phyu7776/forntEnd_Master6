const person = {
    name : 'PHY',
    address : {
        line1 : 'BullSmell',
        city : 'WonJu',
        contry : 'KR',
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <div>
            <div>{person.name}</div>

            <div>{person.address.line1}</div>
            <div>{person.address.city}</div>
            <div>{person.address.contry}</div>

            <div>{person.profiles[0]}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.profiles[2]}</div>

            <div>{ person.printProfile() }</div>
        </div>
    )
}