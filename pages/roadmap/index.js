import styles from './style.module.scss';
import Head from "../../components/Head";
import TitledHeader from "../../components/TitledHeader";
import RoadmapContainer from "../../containers/RoadmapContainer";
import Tabs from "../../containers/Tabs";
import RoadmapColumn from "../../components/RoadmapColumn";

const feedbacks = [
    {
        id: 1,
        title: 'Add tags for solutions',
        description: 'Easier to search for solutions based on a specific stack.',
        categories: ['Enhancement'],
        upvoteCount: 112,
        commentCount: 2,
    },
];

const RoadmapPage = () => {
    return (
        <>
            <Head title={'Roadmap'}/>
            <TitledHeader title={'Roadmap'}/>

            <main>
                <Tabs tabs={
                    [
                        {
                            title: 'Planned (2)',
                            color: '#F49F85',
                            pane: (
                                <div className={styles.roadmapColumnContainer}>
                                    <RoadmapColumn title={'Planned (2)'}
                                                   description={'Ideas prioritized for research'}
                                    >
                                        <div className={styles.roadmapContainer}>
                                            <RoadmapContainer items={feedbacks} />
                                        </div>
                                    </RoadmapColumn>
                                </div>
                            )
                        },
                        {
                            title: 'In-Progress (3)',
                            color: '#AD1FEA',
                            pane: (
                                <div className={styles.roadmapColumnContainer}>
                                    <RoadmapColumn title={'In Progress (3)'}
                                                   description={'Features currently being developed'}
                                    >
                                        <div className={styles.roadmapContainer}>
                                            <RoadmapContainer items={feedbacks} />
                                        </div>
                                    </RoadmapColumn>
                                </div>
                            )
                        },
                        {
                            title: 'Live (1)',
                            color: '#62BCFA',
                            pane: (
                                <div className={styles.roadmapColumnContainer}>
                                    <RoadmapColumn title={'Live (1)'}
                                                   description={'Released features'}
                                    >
                                        <div className={styles.roadmapContainer}>
                                            <RoadmapContainer items={feedbacks} />
                                        </div>
                                    </RoadmapColumn>
                                </div>
                            )
                        }
                    ]
                }/>
            </main>
        </>
    );
};

export default RoadmapPage;
