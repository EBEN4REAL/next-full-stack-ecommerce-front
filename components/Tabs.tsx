import styled from "styled-components";

const StyledTabs = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

interface StyledTabProps {
  active: boolean;
}

const StyledTab = styled.span<StyledTabProps>`
  font-size: 1.5rem;
  cursor: pointer;
  ${(props) =>
    props.active
      ? `
    color:black;
    border-bottom: 2px solid black;
  `
      : `
    color:#999;
  `}
`;

interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tabName: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, active, onChange }) => {
  return (
    <StyledTabs>
      {tabs.map((tabName, index) => (
        <StyledTab
          key={`tabName-${index}`}
          onClick={() => {
            onChange(tabName);
          }}
          active={tabName === active}
        >
          {tabName}
        </StyledTab>
      ))}
    </StyledTabs>
  );
};

export default Tabs;