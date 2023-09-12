import { Avatar, AvatarGroup } from '@sanlamcx/react-ui-next-avatar';
import { Badge } from '@sanlamcx/react-ui-next-badge';
import { Banner } from '@sanlamcx/react-ui-next-banner';
import { Button } from '@sanlamcx/react-ui-next-button';
import { Checkbox } from '@sanlamcx/react-ui-next-checkbox';
import { ChoiceChip, ChoiceGroup } from '@sanlamcx/react-ui-next-choice';
import { CircularLoader } from '@sanlamcx/react-ui-next-circular-loader';
import { DatePicker } from '@sanlamcx/react-ui-next-date-picker-v2';
import { Dropdown, DropdownItem } from '@sanlamcx/react-ui-next-dropdown';
import { Hyperlink } from '@sanlamcx/react-ui-next-hyperlink';
import { IconButton } from '@sanlamcx/react-ui-next-icon-button';
import { InlineNotification } from '@sanlamcx/react-ui-next-inline-notification';
import { Pagination } from '@sanlamcx/react-ui-next-pagination';
import { Paper } from '@sanlamcx/react-ui-next-paper';
import { Pill } from '@sanlamcx/react-ui-next-pill';
import { RadioButton, RadioButtonGroup } from '@sanlamcx/react-ui-next-radio-button';
import { Search } from '@sanlamcx/react-ui-next-search';
import { Slider } from '@sanlamcx/react-ui-next-slider';
import { Switch } from '@sanlamcx/react-ui-next-switch';
import { Tab, TabGroup } from '@sanlamcx/react-ui-next-tabs';
import { Textfield } from '@sanlamcx/react-ui-next-textfield';
import { ToggleButton, ToggleButtonGroup } from '@sanlamcx/react-ui-next-toggle-button';
import { useSnackbar, SnackbarProvider, Snackbar } from '@sanlamcx/react-ui-next-snackbar';
import { Textarea } from '@sanlamcx/react-ui-next-textarea';
import { Panel } from '@sanlamcx/react-ui-next-panel';
import { CopyField } from '@sanlamcx/react-ui-next-copy-field';
import { LinearLoader } from '@sanlamcx/react-ui-next-linear-loader';
import { SelectionCard } from '@sanlamcx/react-ui-next-selection-cards';
import { Typography } from '@sanlamcx/react-ui-next-typography';
import { UploadCard } from '@sanlamcx/react-ui-next-upload-card';
import { Icon } from 'portal-common';

import React, { useState } from 'react';
import { ComponentThemeWrapper } from './ComponentThemeWrapper';
import { Table } from './Table';

const CloseIcon = () => <Icon icon='content_clear' />;

const ExampleSnackbarUsage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const queueSnackbar = () =>
    enqueueSnackbar({ variant: Snackbar.VARIANT.INFO, text: 'Example content in snackbar' });

  return <Button onClick={queueSnackbar}>Queue Snackbar</Button>;
};

export const StorybookComponentExamples = ({ theme }: { theme?: string }) => {
  const [date, setDate] = useState(new Date('2022-09-23T22:00:00.000Z'));

  return (
    <ComponentThemeWrapper theme={theme}>
      <Button>Button</Button>
      <Badge badgeContent={101}>
        <Button>Button</Button>
      </Badge>
      <Checkbox checked={true} name='defaultCheckbox' onChange={() => ({})}>
        Checkbox
      </Checkbox>
      <CircularLoader className='circular' variant={0} dimension={120} value={50} />
      <CircularLoader className='circular' variant={1} />
      <DatePicker
        date={date}
        excludeDates={[]}
        helperText='Assistive text'
        label='Select date'
        maxDate={new Date('2033-02-06T13:34:26.770Z')}
        minDate={new Date('2013-02-06T13:34:26.770Z')}
        onChange={setDate}
      />
      <Dropdown
        assistiveText='Assistive Text'
        label='Label'
        multiSelect
        onChange={() => ({})}
        selected={['item-two', 'item-four']}
      >
        <DropdownItem value='item-one'>Item One</DropdownItem>
        <DropdownItem value='item-two'>Item Two</DropdownItem>
        <DropdownItem value='item-three'>Item Three</DropdownItem>
        <DropdownItem value='item-four'>Item Four</DropdownItem>
      </Dropdown>
      <IconButton aria-label='Accessible label' onClick={() => ({})}>
        <CloseIcon />
      </IconButton>
      <Pagination count={20} onChange={() => ({})} page={0} />
      <Paper color={2} rounding={0} selectable variant={0}>
        <div
          style={{
            height: 128,
            width: '100%'
          }}
        />
      </Paper>
      <Pill endIcon={<CloseIcon />}>Sanlam pill</Pill>
      <RadioButtonGroup defaultSelected='checked' name='radio-button-group' onChange={() => ({})}>
        <RadioButton aria-label='Checked' value='checked'>
          Checked
        </RadioButton>
        <RadioButton aria-label='Not checked' value='not checked'>
          Not checked
        </RadioButton>
        <RadioButton aria-label='Disabled' disabled value='disabled'>
          Disabled
        </RadioButton>
      </RadioButtonGroup>
      <Search
        defaultValue=''
        helperText='Optional Helper Text'
        onChange={() => ({})}
        placeholder='Search words or phrases..'
        size={Search.SIZE.SMALL}
      />
      <Switch aria-label='switch' checked={true} />
      <TabGroup defaultSelected='first'>
        <Tab label='First' name='first'>
          First tab content
        </Tab>
        <Tab label='Second' name='second'>
          Second tab content
        </Tab>
      </TabGroup>
      <Hyperlink href='/registration'>link text</Hyperlink>
      <Textfield
        defaultValue=''
        helperText='Assistive Text'
        label='Label'
        onChange={() => ({})}
        prefix=''
        suffix=''
        type={Textfield.TYPE.TEXT}
      />
      <ToggleButtonGroup onChange={() => ({})} selected={['label1']}>
        <ToggleButton aria-label='Label 1' icon={<CloseIcon />} value='label1'>
          Voice
        </ToggleButton>
        <ToggleButton aria-label='Label 2' value='label2'>
          Play
        </ToggleButton>
        <ToggleButton aria-label='Label 3' disabled icon={<CloseIcon />} value='label3'>
          Phone
        </ToggleButton>
        <ToggleButton aria-label='Label 4' icon={<CloseIcon />} value='label4'>
          Chat
        </ToggleButton>
      </ToggleButtonGroup>
      <Avatar>RD</Avatar>
      <AvatarGroup max={2}>
        <Avatar>RD</Avatar>
        <Avatar>SR</Avatar>
        <Avatar>RD</Avatar>
        <Avatar>SR</Avatar>
      </AvatarGroup>
      <Banner title='Alert' primaryButton={<Button>Accept</Button>}>
        Donec pretium vehicula libero, congue viverra libero luctus eget. Nullam fermentum orci
        erat, quis porttitor massa feugiat in. Fusce laoreet eros ut dolor luctus viverra. Nunc
        pulvinar finibus sodales. Curabitur vehicula dui enim
      </Banner>
      <ChoiceGroup assistiveText='Assistive Text' name='Test Choice Group' defaultSelected='two'>
        <ChoiceChip aria-label='Label One' value='one'>
          Label One
        </ChoiceChip>
        <ChoiceChip aria-label='Label Two' value='two'>
          Label Two
        </ChoiceChip>
        <ChoiceChip aria-label='Label Three' value='three'>
          Label Three
        </ChoiceChip>
      </ChoiceGroup>

      <InlineNotification
        onDismiss={() => ({})}
        primaryButton={
          <Button size={0} variant={2}>
            Button One
          </Button>
        }
        secondaryButton={<Button size={0}>Button Two</Button>}
        title='Lorem ipsum dolor sit amet.'
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </InlineNotification>
      <Slider
        aria-label='Accessible label text'
        initialValue={50}
        onChange={() => ({})}
        showValueLabel
        style={{ marginTop: '24px', marginBottom: '24px' }}
      />
      <SnackbarProvider>
        <ExampleSnackbarUsage />
      </SnackbarProvider>
      <Textarea label='Enter block of text here' />
      <Panel
        button={() => <Button>Close</Button>}
        icon={() => <CloseIcon />}
        open={false}
        onChange={() => ({})}
        overline='overline'
        title={
          <>
            This is the <b>heading</b>
          </>
        }
      >
        <div
          style={{
            backgroundColor: 'lightgrey',
            height: 80,
            width: '100%'
          }}
        />
      </Panel>
      <CopyField helperText='Assistive text' onCopy={() => ({ value: '' })}>
        https://stackoverflow.com/questions/27465851/how-should-i-handle-very-very-long-url
      </CopyField>
      <LinearLoader aria-label='Linear' value={50} />
      <LinearLoader aria-label='Linear' value={50} variant={LinearLoader.VARIANT.DETERMINATE} />
      <Paper
        color={1}
        style={{
          padding: 24
        }}
      >
        <SelectionCard
          icon={<CloseIcon />}
          subtitle={
            <Typography color={1} variant={8}>
              Secondary Text
            </Typography>
          }
          title={
            <Typography color={1} variant={3}>
              Title Text
            </Typography>
          }
        >
          <Checkbox />
        </SelectionCard>
      </Paper>
      <UploadCard
        fileName='Document_name.pdf'
        fileSize='446.08KB'
        helperText='Lorem ipsum dolor set'
        icon={<CloseIcon />}
        onCancel={() => ({})}
        onDelete={() => ({})}
        onPreview={() => ({})}
        onRetry={() => ({})}
        progress={50}
      />
      <Table />
    </ComponentThemeWrapper>
  );
};
