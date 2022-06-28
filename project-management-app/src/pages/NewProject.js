import styles from '../App.module.css'
import BreadcrumbElement from '../components/elements/BreadcrumbElement'
import ProjectForm from '../components/project/ProjectForm'

export default function NewProject() {
    return (
        <>
            <BreadcrumbElement first="New Project" />
            <div className={styles.site_layout_content}>
                <h1>New Project</h1>
                <p>Creat a new project...</p>
                <ProjectForm />
            </div>
        </>
    )
}
