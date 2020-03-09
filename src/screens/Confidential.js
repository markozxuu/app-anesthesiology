// Packages
import React, { useState } from 'react';
import { Tabs, Tab, ScrollableTab, Container } from 'native-base';
import { FloatingAction } from 'react-native-floating-action';

// Components
import { DescriptionRoute } from '../components/TabView/Confidential/Description';
import { ClassificationRoute } from '../components/TabView/Confidential/Classification';
import { ReflectionRoute } from '../components/TabView/Confidential/Reflection';
import { SummaryRoute } from '../components/TabView/Confidential/Summary';
import { ResponsableRoute } from '../components/TabView/Confidential/Responsable';

// Context
import { ConfiProvider } from '../context/ConfiContext';

// Icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const Confidential = () => {
  // State Tab
  const [tabIndex, setTab] = useState(0);
  // State of responsable
  const [cfp, setCfp] = useState('');
  const [crm, setCrm] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // State of description
  const [patientSelect, setPatient] = useState('');
  const [ageSelect, setAge] = useState('');
  const [imcSelect, setImc] = useState('');
  const [asaSelect, setAsa] = useState('');
  const [locationSelect, setLocation] = useState('');
  const [timeSelect, setTime] = useState('');
  const [assistantSelect, setAssistant] = useState('');
  const [supevisorSelect, setSupevisor] = useState('');
  const [otherSelect, setOther] = useState('');
  const [problemSelect, setProblem] = useState('');
  const [descriptionProblem, setDescription] = useState('');
  // State of classification
  const [activeSections, setActiveSections] = useState([]);
  const [isChecked, setChecked] = useState([]);
  const [gravitySelect, setGravity] = useState();
  // State of reflection
  const [radioGroup, setRadioGroup] = useState('');
  const [radioGroup2, setRadioGroup2] = useState('');
  const [contributingFactor, setContributingFactor] = useState('');
  const [learnedLessons, setLearnedLessons] = useState('');

  // Logs
  const logDescription = {
    patientSelect,
    ageSelect,
    imcSelect,
    asaSelect,
    locationSelect,
    timeSelect,
    assistantSelect,
    supevisorSelect,
    otherSelect,
    problemSelect,
    descriptionProblem
  };
  const logReflection = {
    radioGroup,
    radioGroup2,
    contributingFactor,
    learnedLessons
  };
  const values = {
    // State of responsable
    cfp,
    setCfp,
    crm,
    setCrm,
    name,
    setName,
    email,
    setEmail,
    // State of description
    patientSelect,
    setPatient,
    ageSelect,
    setAge,
    imcSelect,
    setImc,
    asaSelect,
    setAsa,
    locationSelect,
    setLocation,
    timeSelect,
    setTime,
    assistantSelect,
    setAssistant,
    supevisorSelect,
    setSupevisor,
    otherSelect,
    setOther,
    problemSelect,
    setProblem,
    descriptionProblem,
    setDescription,
    // State of classification
    activeSections,
    setActiveSections,
    isChecked,
    setChecked,
    gravitySelect,
    setGravity,
    // State of reflection
    radioGroup,
    setRadioGroup,
    radioGroup2,
    setRadioGroup2,
    contributingFactor,
    setContributingFactor,
    learnedLessons,
    setLearnedLessons,
    // Logs
    logDescription,
    logReflection
  };
  const BtChangeTab = () => {
    setTab(tabIndex + 1);
  };
  const handleChangeTab = tabChange => {
    setTab(tabChange.i);
  };
  return (
    <Container>
      <ConfiProvider value={values}>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          page={tabIndex}
          onChangeTab={tabChange => handleChangeTab(tabChange)}
        >
          <Tab heading="RESPONSABLE">
            <ResponsableRoute />
          </Tab>
          <Tab heading="DESCRIPCIÓN">
            <DescriptionRoute />
          </Tab>
          <Tab heading="CLASIFICAR">
            <ClassificationRoute />
          </Tab>
          <Tab heading="REFLEXIÓN">
            <ReflectionRoute />
          </Tab>
          <Tab heading="REVISIÓN">
            <SummaryRoute />
          </Tab>
        </Tabs>
        {tabIndex === 4 ? (
          <FloatingAction
            animated={false}
            showBackground={false}
            color="#7928CA"
            floatingIcon={<Icon name={'send'} size={30} color="#fff" />}
            onPressMain={() => console.log('Envio de datos')}
          />
        ) : (
          <FloatingAction
            animated={false}
            showBackground={false}
            color="#0070F3"
            floatingIcon={<Icon name={'check'} size={30} color="#fff" />}
            onPressMain={BtChangeTab}
          />
        )}
      </ConfiProvider>
    </Container>
  );
};

export default Confidential;
