import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateSnapshotScheduleMessage, SnapshotSchedule } from "../models/index";
import {
  deserializeAws_queryCreateSnapshotScheduleCommand,
  serializeAws_queryCreateSnapshotScheduleCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateSnapshotScheduleCommandInput = CreateSnapshotScheduleMessage;
export type CreateSnapshotScheduleCommandOutput = SnapshotSchedule & __MetadataBearer;

export class CreateSnapshotScheduleCommand extends $Command<
  CreateSnapshotScheduleCommandInput,
  CreateSnapshotScheduleCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSnapshotScheduleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSnapshotScheduleCommandInput, CreateSnapshotScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateSnapshotScheduleMessage.filterSensitiveLog,
      outputFilterSensitiveLog: SnapshotSchedule.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSnapshotScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateSnapshotScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSnapshotScheduleCommandOutput> {
    return deserializeAws_queryCreateSnapshotScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
