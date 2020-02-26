#!/usr/bin/env node

import program from 'commander';
import { version, description } from '../../package.json';
import selllife from '..';

program
  .usage('[pathToFile]')
  .description(description)
  .version(`selllife version: ${version}`, '-v, --version', 'output the version number')
  .arguments('[pathToFile]')
  .action((pathToFile) => selllife(pathToFile || null))
  .parse(process.argv);
