import TaskList from "@/components/TaskList";

export async function getServerSideProps() {
  const email = false;

  if (!email) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { email },
  };
}

const TaskListPage = ({ email }: {email: string}) => {
  return <TaskList email={email} />;
};

export default TaskListPage;
