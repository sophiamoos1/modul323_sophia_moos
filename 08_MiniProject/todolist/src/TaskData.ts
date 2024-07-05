import {TaskType} from "./TaskType";
import {Priority} from "./Priority";
import {Status} from "./Status";
import {Category} from "./Category";

export function PrivateTaskData(): TaskType[] {
    const tasks: TaskType[] = [
        {
            id: "ptask1",
            name: "Kleiderschrank ausmisten",
            description: "Kleider anpobieren und aussortieren & Winterkleider in seperaten Schrank legen",
            priority: Priority.low,
            status: Status.complete,
            category: Category.household,
            estimatedWorkingHours: 1.5,
            startDate: new Date('2024-06-27'),
            finishDate: new Date('2024-06-27'),
            deadline: new Date('2024-07-21')
        },
        {
            id: "ptask2",
            name: "Krankenkasse-Rechnung bezahlen",
            priority: Priority.high,
            status: Status.todo,
            category: Category.bills,
            estimatedWorkingHours: 0.5,
            deadline: new Date('2024-06-30')
        },
        {
            id: "ptask3",
            name: "Pflanzen umpflanzen",
            description: "Neue Pflanzen, erde und Töpfe kaufen und neue&alte Pflanzen umpflazen",
            priority: Priority.medium,
            status: Status.started,
            category: Category.household,
            estimatedWorkingDays: 2,
            startDate: new Date('2024-06-26'),
            deadline: new Date('2024-07-30')
        }
    ]
    return tasks
}

export function SchoolTaskData(): TaskType[] {
    const tasks: TaskType[] = [
        {
            id: "stask2",
            name: "Dokumentation schreiben",
            description: "Dokumentation für Mini-Project schreiben und Präsentation erstellen",
            priority: Priority.high,
            status: Status.todo,
            category: Category.school,
            estimatedWorkingHours: 1.5,
            deadline: new Date('2024-07-03')
        }
    ]
    return tasks
}

export function WorkTaskData(): TaskType[] {
    const tasks: TaskType[] = [
        {
            id: "wtask1",
            name: "Arbeitsjournal schreiben",
            description: "Alle Tätigkeiten von Juni eintragen und beschreiben",
            priority: Priority.high,
            status: Status.todo,
            category: Category.work,
            estimatedWorkingHours: 1.0,
            deadline: new Date('2024-06-30'),
        },
        {
            id: "wtask2",
            name: "Bildungsbericht ausfüllen",
            description: "Schulnoten eintragen und Bildungsberichtfeedback ausfüllen",
            priority: Priority.high,
            status: Status.todo,
            category: Category.work,
            estimatedWorkingHours: 2.0,
            deadline: new Date('2024-07-01'),
        },
        {
            id: "wtask3",
            name: "Demo Projekt erstellen",
            description: "Demo Projekt für Swift für Unterstifen erstellen und Dokumentieren",
            priority: Priority.low,
            status: Status.complete,
            category: Category.work,
            estimatedWorkingDays: 3,
            startDate: new Date('2023-08-01'),
            finishDate: new Date('2023-08-05'),
            deadline: new Date('2023-08-14'),
        }
    ]
    return tasks
}
