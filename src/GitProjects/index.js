import { Project } from "./Project";
import {
  Body,
  ErrorDescription,
  ErrorHeader,
  Header,
  Link,
  LoadingDescription,
  StyledIconDanger,
  StyledIconGit,
  StyledIconSpinner,
  Text,
  Wrapper,
} from "./styled";
import { useProjectData } from "./useProjectData";

export const GitProjects = () => {
  const statusApi = useProjectData();

  return (
    <Wrapper>
      <StyledIconGit />
      <Header>Portfolio</Header>
      <Text>My recent project</Text>
      <div>
        {statusApi.status === "loading" ? (
          <>
            <LoadingDescription>
              Please wait, projects are being loaded...
            </LoadingDescription>
            <StyledIconSpinner />
          </>
        ) : statusApi.status === "error" ? (
          <>
            <StyledIconDanger />
            <ErrorHeader>Ooops! Something went wrong... </ErrorHeader>
            <ErrorDescription>
              Sorry, failed to load Github projects. <br />
              You can check them directly on Github.
            </ErrorDescription>
            <Link href="https://github.com/OskarS99">Go to Github</Link>
          </>
        ) : (
          <Body>
            <Project />
            <Project />
            <Project />
            <Project />
          </Body>
        )}
      </div>
    </Wrapper>
  );
};
