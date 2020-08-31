import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/index";
import {
  deserializeAws_restJson1ListDeliverabilityTestReportsCommand,
  serializeAws_restJson1ListDeliverabilityTestReportsCommand,
} from "../protocols/Aws_restJson1";
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

export type ListDeliverabilityTestReportsCommandInput = ListDeliverabilityTestReportsRequest;
export type ListDeliverabilityTestReportsCommandOutput = ListDeliverabilityTestReportsResponse & __MetadataBearer;

export class ListDeliverabilityTestReportsCommand extends $Command<
  ListDeliverabilityTestReportsCommandInput,
  ListDeliverabilityTestReportsCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDeliverabilityTestReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: ListDeliverabilityTestReportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDeliverabilityTestReportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeliverabilityTestReportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeliverabilityTestReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDeliverabilityTestReportsCommandOutput> {
    return deserializeAws_restJson1ListDeliverabilityTestReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
