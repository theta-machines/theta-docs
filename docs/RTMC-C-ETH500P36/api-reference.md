# RTMC Card API Reference
RTMC cards run a TCP server that responds to plain-text commands with JSON objects.

## `auth`
This command authenticates the client. The client MUST authenticate before issuing any additional commands. If the client fails to authenticate successfully as the first transaction, the server will drop the connection.

### Usage
```
auth <token>
```
* `<token>` - The API token. By default, this value is `default_token`.

### Response
When successful, the response will simply be:
```JSON
{
    "status": "OKAY"
}
```

On failure, the response will follow this format:
```JSON
{
    "status": "ERROR",
    "error-message": "<...>"
}
```

<br/><br/>

## `discover`
This command checks the RTMC card's "service" against a unix-style wildcard pattern. This command is not intended to be used by a TCP client except for testing purposes. Instead, this command is meant to be issued as a UDP multicast packet. The goal is to auto-discover RTMC cards on the network.

This command can be called by either a TCP client or a UDP client.

### Usage
```
discover <pattern>
```
* `<pattern>` - A unix-style wildcard pattern. For precise syntax, refer to the [`glob()` manual page](https://man7.org/linux/man-pages/man7/glob.7.html).

### Response
If `<pattern>` is matched, the response will follow this format:
```JSON
{
    "service": "rtmc-tcp-1.0",
    "port": 65001,
    "device": "rtmc-c-eth500p36",
    "serial_number": "1234ABCD",
    "firmware_version": "1.2.3"
}
```

If `<pattern>` is not matched, then the behavior depends on if the command was sent to the UDP multicast group, or to the TCP server.
* If sent to the UDP multicast group, the RTMC card will simply not reply.

* If sent to the TCP server, the RTMC card will reply with an empty JSON object:
    ```JSON
    {}
    ```

<br/><br/>

## `net get`
The `net` command has two subcommands: `net get` and `net set`. This section only documents the `net get` subcommand.

This command retrieves the RTMC card's network settings.

### Usage
```
net get
```

### Response
When successful, the response will follow this format:
```JSON
{
    "status": "OKAY",
    "udp_multicast_group": "239.255.255.126",
    "udp_port": 65000,
    "tcp_port": 65001,
    "use_dhcp": true,
    "ipv4_address": "0.0.0.0",
    "subnet_mask": "0.0.0.0",
    "default_gateway": "0.0.0.0"
}
```

On failure, the response will follow this format:
```JSON
{
    "status": "ERROR",
    "error-message": "<...>"
}
```

<br/><br/>

## `net set`
The `net` command has two subcommands: `net get` and `net set`. This section only documents the `net set` subcommand.

This command sets the RTMC card's network settings.

### Usage
```
net set <JSON>
```

* `<JSON>` - A valid JSON object containing ALL of these fields:
    ```JSON
    {
        "udp_multicast_group": "239.255.255.126",
        "udp_port": 65000,
        "tcp_port": 65001,
        "use_dhcp": true,
        "ipv4_address": "0.0.0.0",
        "subnet_mask": "0.0.0.0",
        "default_gateway": "0.0.0.0"
    }
    ```

### Response
When successful, the response will simply be:
```JSON
{
    "status": "OKAY"
}
```

On failure, the response will follow this format:
```JSON
{
    "status": "ERROR",
    "error-message": "<...>"
}
```

<br/><br/>

## `reboot`
This command reboots the RTMC card.

### Usage
```
reboot
```

### Response
Since the RTMC card reboots, the TCP socket will close and no response will be given.

On failure, the response will follow this format:
```JSON
{
    "status": "ERROR",
    "error-message": "<...>"
}
```
